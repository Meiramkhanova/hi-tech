import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import LabRegistrsationForm from "@/widgets/lab-registration/LabRegistrsationForm";
import Image from "next/image";

function LabRegistrationPage() {
  return (
    <section className="lab-registration">
      <Container>
        <div className="lab-register-wrapper grid grid-cols-1 md:grid-cols-2 pt-8 gap-6 md:gap-8">
          <Image
            src="/assets/lab-form.jpg"
            alt="lab-register"
            width={672}
            height={672}
            className="h-[21rem] md:h-[35rem] w-full object-cover rounded-2xl"
          />

          <LabRegistrsationForm />
        </div>
      </Container>
    </section>
  );
}

export default LabRegistrationPage;
