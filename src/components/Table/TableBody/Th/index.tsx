import { ThType } from 'types/table'

interface ThProps {
  head: ThType[]
  page: string
}

const Th = (data: ThProps) => {
  return (
    <>
      {data.head.map((head, i) => (
        <th
          key={`tableBodyTh${data.page + i}`}
          scope="col"
          className={`
          px-6 py-3 text-left text-xs font-medium text-gray-500
          dark:text-gray-400 uppercase tracking-wider
          ${head.className}
        `}
        >
          {head.value}
        </th>
      ))}
    </>
  )
}

export default Th
