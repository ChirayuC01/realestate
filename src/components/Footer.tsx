// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} DPAvisors. All rights reserved.</p>
      </div>
    </footer>
  );
}
