import { cn } from "@/lib/utils";
import SectionComponent from "./SectionComponent";

type ComparisonRow = {
  erp: string;
  negoco: string;
};

const comparisonData: ComparisonRow[] = [
  {
    erp: "No están diseñados para gestionar comparativas, contratos ni clientes",
    negoco:
      "Diseñado 100% para el sector energético, sin personalizaciones externas",
  },
  {
    erp: "Altos costes de implantación, personalización y mantenimiento",
    negoco:
      "Automatización total de comparativas, contratos y seguimiento de trámites",
  },
  {
    erp: "Falta de flexibilidad ante los cambios normativos del sector",
    negoco:
      "Panel comercial unificado con alertas en tiempo real y documentación centralizada",
  },
  {
    erp: "Curva de aprendizaje elevada y procesos innecesarios",
    negoco: "Fácil adopción, intuitivo, sin necesidad de formación compleja",
  },
  {
    erp: "Carecen de automatizaciones orientadas a la fuerza comercial",
    negoco:
      "Escalable y flexible, se adapta a tus equipos, procesos y crecimiento",
  },
];

const ComparisonTable = () => (
  <div className="overflow-hidden rounded-xl shadow-md bg-white border border-gray-100">
    <table className="w-full border-collapse hidden md:table">
      <thead>
        <tr className="bg-gray-50 ">
          <th className="p-4 text-left text-primary-950  border-b border-gray-200 ">
            ERP Tradicional
          </th>
          <th className="p-4 text-left text-primary-700  border-b border-gray-200  bg-blue-50 ">
            Negoco Cloud CRM
          </th>
        </tr>
      </thead>
      <tbody>
        {comparisonData.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50 ">
            <td
              className={cn(
                "relative p-4 border-b border-gray-200 text-gray-600",
                index === comparisonData.length - 1 ? "border-0" : ""
              )}
            >
              <div className="flex items-start gap-3 text-sm">
                <span className="mt-0.5">❌</span>
                <span>{row.erp}</span>
              </div>
            </td>
            <td
              className={cn(
                "relative p-4 border-b border-gray-200  text-blue-600  bg-blue-50/50 ",
                index === comparisonData.length - 1 ? "border-0" : ""
              )}
            >
              <div className="flex items-start gap-3 text-sm">
                <span className="mt-0.5">✅</span>
                <span>{row.negoco}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Mobile version */}
    <div className="md:hidden divide-y divide-gray-200">
      {comparisonData.map((row, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex items-start gap-3 text-sm p-4">
            <span className="text-red-500 mt-0.5">❌</span>
            <div>
              <div className="font-medium text-gray-900 mb-1">
                ERP Tradicional
              </div>
              <span className="text-gray-600">{row.erp}</span>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm bg-blue-50/50 p-4">
            <span className="text-green-500 mt-0.5">✅</span>
            <div>
              <div className="font-medium text-blue-700 mb-1">
                Negoco Cloud CRM
              </div>
              <span className="text-blue-600">{row.negoco}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function CRMvsERPSection() {
  return (
    <SectionComponent
      title="CRM vs ERP: ¿Cuál es la solución ideal para tu empresa energética?"
      subtitle="Mientras que los ERPs son herramientas generalistas enfocadas en la contabilidad y los procesos internos, Negoco Cloud está diseñado exclusivamente para consultorías y empresas del sector de la energía, centrándose en lo que realmente impulsa tu negocio: la gestión comercial, los clientes y el cierre de ventas."
      ctaButton={true}
    >
      <div className="w-full">
        <ComparisonTable />
      </div>
    </SectionComponent>
  );
}
