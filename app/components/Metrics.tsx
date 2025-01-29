import dynamic from "next/dynamic"

const MicrosoftClarity = dynamic(() => import("./MicrosoftClarity"), { ssr: false })

export default function Metrics() {
  return (
    <>
      <MicrosoftClarity />
    </>
  )
}
