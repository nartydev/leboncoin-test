import {FC} from 'react'
import * as HeadWrap from 'next/head'
interface IProps {
  title: string
  descr: string
}

export const Head: FC<IProps> = ({title, descr}) => {
  return (
    <HeadWrap.default>
      <title>{title}</title>
      <meta name="description" content={descr}></meta>
    </HeadWrap.default>
  )
}
