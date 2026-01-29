import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const company = data.get('company');
    const message = data.get('message');

    try {
        const send = await resend.emails.send({
            from: 'Web Contacto <onboarding@resend.dev>', 
            to: ['fadikirbag5@gmail.com'], 
            subject: `Nuevo mensaje de ${name} - ${company}`,
            html: `
                <h1>Nuevo contacto desde la web del sistema administrativo</h1>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Empresa:</strong> ${company}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `,
        });

        return new Response(JSON.stringify({ message: 'Enviado con éxito' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error al enviar' }), { status: 500 });
    }
};