import { Helmet } from 'react-helmet-async'

type Props = {
  title: string
}

function PageTitle({ title }: Props): JSX.Element {
  return (
    <Helmet>
      <title>{title} | k-election</title>
    </Helmet>
  )
}

export default PageTitle
