import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#13405C] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <Phone size={14} />
            <span>+1-800-LABOZIKS</span>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <Mail size={14} />
            <span>support@labozikks.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#">Help Center</a>
          <a href="#">Track Order</a>
        </div>
      </div>
    </div>
  );
}
