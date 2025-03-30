interface Treatment {
  name: string
  price: string
}

interface TreatmentSectionProps {
  title: string
  treatments: Treatment[]
}

export function TreatmentSection({ title, treatments }: TreatmentSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-[#4a2a1d] mb-4 text-left sm:text-center md:text-left">{title}</h3>
      <ul className="space-y-3">
        {treatments.map((treatment, index) => (
          <li key={index} className="text-[#4a2a1d] flex justify-between items-center">
            <span>{treatment.name}</span>
            <span className="text-sm font-medium">{treatment.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

