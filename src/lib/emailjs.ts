import emailjs from "@emailjs/browser";

export type SignupRequest = {
  name: string;
  phone: string;
  date: string;
  time: string;
  plan: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function sendSignupRequest(request: SignupRequest) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are not set");
  }

  await emailjs.send(serviceId, templateId, request, { publicKey });
}
