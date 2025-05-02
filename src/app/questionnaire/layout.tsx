export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
