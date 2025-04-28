import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  plan: "demo" | "starter" | "pro" | "elite";
}

const ConfirmationEmail = ({
  name,
  lastName,
  email,
  phone,
  company,
  plan,
}: EmailProps) => {
  const planDetails = {
    demo: {
      title: "Demo",
      description: "Acceso gratuito por 30 días a todas las funcionalidades",
      color: "bg-[#6B7280] text-white",
    },
    starter: {
      title: "Starter",
      description: "Funcionalidades básicas para pequeñas empresas",
      color: "bg-[#3B82F6] text-white",
    },
    pro: {
      title: "Pro",
      description: "Solución completa para empresas en crecimiento",
      color: "bg-[#8B5CF6] text-white",
    },
    elite: {
      title: "Elite",
      description: "Solución avanzada con características personalizadas",
      color: "bg-[#10B981] text-white",
    },
  };

  const fullName = `${name} ${lastName}`;

  return (
    <Html lang="es" dir="ltr">
      <Head />
      <Preview>Confirmación de solicitud de Negoco Cloud - {company}</Preview>
      <Tailwind>
        <Body className="bg-[#f6f9fc] font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] mx-auto p-[20px] max-w-[600px]">
            <Section>
              <Heading className="text-[24px] font-bold text-center text-[#333] my-[24px]">
                ¡Gracias por tu solicitud!
              </Heading>
              <Text className="text-[16px] text-[#333] mb-[16px]">
                Hola {fullName},
              </Text>
              <Text className="text-[16px] text-[#333] mb-[16px]">
                Hemos recibido correctamente tu solicitud para nuestro servicio
                de CRM. A continuación, encontrarás un resumen de la información
                proporcionada:
              </Text>
            </Section>

            <Section className="bg-[#f9fafb] rounded-[8px] p-[16px] mb-[24px]">
              <Row>
                <Column>
                  <Text className="text-[14px] text-[#4b5563] m-0">
                    <strong>Nombre completo:</strong> {fullName}
                  </Text>
                  <Text className="text-[14px] text-[#4b5563] m-0">
                    <strong>Email:</strong> {email}
                  </Text>
                  <Text className="text-[14px] text-[#4b5563] m-0">
                    <strong>Teléfono:</strong> {phone}
                  </Text>
                  <Text className="text-[14px] text-[#4b5563] m-0">
                    <strong>Empresa:</strong> {company}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mb-[24px]">
              <Text className="text-[18px] font-bold text-[#333] mb-[8px]">
                Plan seleccionado:
              </Text>
              <Row>
                <Column
                  className={`${planDetails[plan].color} p-[16px] rounded-[8px]`}
                >
                  <Text className="text-[18px] font-bold m-0">
                    {planDetails[plan].title}
                  </Text>
                  <Text className="text-[14px] m-0">
                    {planDetails[plan].description}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mb-[24px]">
              <Text className="text-[16px] text-[#333] mb-[16px]">
                Uno de nuestros asesores se pondrá en contacto contigo en las
                próximas 24 horas para guiarte en los siguientes pasos y
                resolver cualquier duda que puedas tener.
              </Text>
            </Section>

            <Hr className="border border-solid border-[#e5e7eb] my-[24px]" />

            <Section>
              <Text className="text-[14px] text-[#6b7280]">
                Saludos cordiales,
                <br />
                El equipo de Negoco Cloud
              </Text>
            </Section>
          </Container>

          <Container className="max-w-[600px] mx-auto mt-[32px] text-center">
            <Text className="m-0 mb-[8px]">
              Este es un correo interno. Por favor, no responda a este mensaje.
            </Text>
            <Text className="text-[12px] text-[#6b7280] m-0">
              © {new Date().getFullYear()} Negoco Cloud. Todos los derechos
              reservados.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationEmail;
