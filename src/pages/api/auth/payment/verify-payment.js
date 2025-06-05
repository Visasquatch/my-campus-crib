export default function handler(req, res) {
    if (req.method === 'POST') {
      // verify payment logic here
      const { reference } = req.body;
  
      // Normally you'd call Paystack's verify endpoint here using reference
      res.status(200).json({ message: `Payment verified for ${reference}` });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  