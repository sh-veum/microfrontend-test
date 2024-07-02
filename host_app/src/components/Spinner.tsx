// From https://github.com/TanStack/router/blob/main/examples/react/kitchen-sink-react-query-file-based/src/components/Spinner.tsx

import { Disc3 } from "lucide-react";

export function Spinner({
  show,
  wait,
}: {
  show?: boolean;
  wait?: `delay-${number}`;
}) {
  return (
    <div
      className={`inline-block animate-spin px-3 transition ${
        show ?? true
          ? `opacity-1 duration-500 ${wait ?? "delay-300"}`
          : "duration-500 opacity-0 delay-0"
      }`}
    >
      <Disc3 />
    </div>
  );
}
