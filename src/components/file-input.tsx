"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ImageUp, RemoveFormattingIcon, Trash, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from './ui/input'

interface FileInputProps {
  onChange?: (file: File | null) => void
  className?: string
  accept?: string
  maxSize?: number // in MB
}

export default function FileInput({
  onChange,
  className,
  accept = "image/jpeg,image/png,image/jpg,image/gif,image/webp",
  maxSize = 5, // Default 5MB
}: FileInputProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setError(null)

    if (!selectedFile) {
      setFile(null)
      setPreview(null)
      onChange?.(null)
      return
    }

    // Check file type
    if (!selectedFile.type.match(/^image\/(jpeg|png|jpg|gif|webp)$/i)) {
      setError("Please select a valid image file (JPG, PNG, JPEG, GIF, WEBP)")
      return
    }

    // Check file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size should not exceed ${maxSize}MB`)
      return
    }

    setFile(selectedFile)
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
    onChange?.(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const triggerFileInput = () => {
    inputRef.current?.click()
  }

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFile(null)
    setPreview(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    onChange?.(null)
  }

  return (
    <div className={cn("space-y-2")}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-28  rounded-lg cursor-pointer transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-input hover:border-primary/50 hover:bg-muted/50",
          preview ? "h-auto aspect-auto" : "h-28",
          "bg-shape-shape", className // Light pink background matching the image
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <Input
          id="file-input"
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        />

        {preview ? (
          <div className="relative w-full">
            <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-[350px] max-w-full mx-auto rounded-md object-cover" />
            <Button variant="secondary" size="sm" className="absolute bottom-0 right-0" onClick={removeFile}>
            <Trash className="w-4 h-4 text-orange-base" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="p-3 rounded-lg bg-shape-shape">
              <ImageUp className="w-6 h-6 text-orange-base" />
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  )
}

