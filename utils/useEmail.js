import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_krdakqb'
const TEMPLATE_ID = 'template_63ovsge'
const PUBLIC_KEY = 'CbVsQwj9qlkJvn8d_'

export async function sendAgendamentoEmail(formData) {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    )
    return true
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return false
  }
}
