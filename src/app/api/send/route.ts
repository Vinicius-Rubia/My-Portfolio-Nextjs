// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: any, res: any) {
    const email = req.body.email;
//   const { body } = await req.json();
//   const { email, subject, message } = body;
//   console.log(body);

//   try {
//     const data = await resend.emails.send({
//       from: fromEmail!,
//       to: ['vinicius.deoliveirarubia@gmail.com', email],
//       subject: subject,
//       react: (`
//         <>
//           <h1>${subject}</h1>
//           <p>Obrigado por entrar em contato</p>
//           <p>${message}</p>
//         </>
//       `), 
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
}
