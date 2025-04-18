import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="font-extrabold text-3xl md:text-4xl lg:text-6xl tracking-tighter md:px-6 text-center">
        Detetion Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}
