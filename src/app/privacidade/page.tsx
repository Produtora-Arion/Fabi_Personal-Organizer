import { redirect } from "next/navigation";

// Atalho — a política de privacidade de verdade vive em /politica-de-privacidade;
// esta rota existe só porque alguns lugares (ex: Meta for Developers) costumam
// procurar por "/privacidade" primeiro.
export default function PrivacidadeRedirect() {
  redirect("/politica-de-privacidade");
}
