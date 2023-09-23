import { clsx } from "clsx"
import "./portfoliolist.scss"

export default function PortfolioList({title,active,setSelected,id}) {

  const classes = clsx({
    portfolioList: true,
    active: active === true
  })
  return (
      <li className={classes} onClick={()=>setSelected(id)} >{title}</li>
  )
}
