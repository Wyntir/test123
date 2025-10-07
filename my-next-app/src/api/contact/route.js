// src/app/api/contact/route.js

import { NextResponse } from 'next/server'

// Optional: Uncomment if using Resend
// import { Resend } from 'resend'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, to } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Development mode: Log submission
    console.log('📩 Contact Form Submission:', {
      to: to || 'miraicho00@gmail.com',
      from: email,
      name,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // 🔐 Optional: Send email using Resend (make sure to install it first)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailResponse = await resend.emails.send({
      from: 'contact@miraicho.dev', // must be a verified domain
      to: to || 'miraicho00@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    })

    console.log('✅ Email sent:', emailResponse)
    */

    return NextResponse.json(
      { message: 'Message received. Thank you!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error handling contact form:', error)

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
