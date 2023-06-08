interface PageSeoProps {
    title: string;
}
export const PageSeo = ({title}:PageSeoProps) => {
  return (
    <div>{title}</div>
  )
}