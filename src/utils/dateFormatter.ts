export function dateFormatter(dateString: string) {
    const date = new Date(dateString);
    
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      // weekday: 'short' // descomente se quiser mostrar o dia da semana
    }).format(date);
  }