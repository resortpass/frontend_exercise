import { Pass } from "@/lib/types";

interface PassRowProps {
  pass: Pass;
}

export function PassRow({ pass }: PassRowProps) {
  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className="text-gray-700">{pass.type}</span>
      <div className="flex items-center gap-2">
        {pass.originalPrice && (
          <span className="text-gray-400 line-through">
            ${pass.originalPrice}
          </span>
        )}
        <span className="font-semibold text-gray-900">${pass.price}</span>
      </div>
    </div>
  );
}
