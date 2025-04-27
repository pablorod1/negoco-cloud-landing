import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

export interface LeadData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  plan: "demo" | "starter" | "pro" | "elite";
}

const LeadNotificationEmail = ({
  name,
  lastName,
  email,
  phone,
  company,
  plan,
}: LeadData) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>
          Nuevo lead recibido: {name} {lastName}
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] mx-auto p-[32px] max-w-[600px]">
            <Section>
              <Heading className="text-[24px] font-bold text-gray-800 m-0 mb-[24px]">
                Nuevo lead recibido: {name} {lastName}
              </Heading>

              <Text className="text-[16px] text-gray-700 mb-[16px]">
                Estimado equipo,
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Nos complace informar que hemos recibido una nueva solicitud a
                través del formulario de nuestra landing page. A continuación,
                se detallan los datos proporcionados por el potencial cliente:
              </Text>

              <Section className="bg-gray-50 p-[24px] rounded-[8px] mb-[24px]">
                <Text className="text-[16px] font-semibold text-gray-800 m-0 mb-[8px]">
                  Datos del lead:
                </Text>

                <Section className="mb-[16px]">
                  <Text className="text-[14px] text-gray-600 m-0 mb-[4px]">
                    <strong>Nombre:</strong> {name}
                  </Text>
                  <Text className="text-[14px] text-gray-600 m-0 mb-[4px]">
                    <strong>Apellidos:</strong> {lastName}
                  </Text>
                  <Text className="text-[14px] text-gray-600 m-0 mb-[4px]">
                    <strong>Correo electrónico:</strong> {email}
                  </Text>
                  <Text className="text-[14px] text-gray-600 m-0 mb-[4px]">
                    <strong>Teléfono:</strong> {phone}
                  </Text>
                  <Text className="text-[14px] text-gray-600 m-0">
                    <strong>Compañía:</strong> {company}
                  </Text>
                  <Text className="text-[14px] text-gray-600 m-0">
                    <strong>Plan:</strong> {plan}
                  </Text>
                </Section>
              </Section>

              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Recordamos la importancia de contactar con este lead a la mayor
                brevedad posible para maximizar las posibilidades de conversión.
                Estudios demuestran que la respuesta dentro de las primeras
                horas aumenta significativamente las tasas de éxito.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[16px]">
                Gracias por su atención inmediata a esta oportunidad.
              </Text>

              <Text className="text-[16px] text-gray-700">
                Saludos cordiales,
                <br />
                Departamento de Marketing
              </Text>
            </Section>

            <Section className="border-t border-gray-200 mt-[32px] pt-[24px] text-[12px] text-gray-500">
              <Text className="m-0 mb-[8px]">
                Este es un correo interno. Por favor, no responda a este
                mensaje.
              </Text>
              <Text className="m-0 mb-[8px]">
                © {new Date().getFullYear()} Negoco Cloud. Todos los derechos
                reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default LeadNotificationEmail;
