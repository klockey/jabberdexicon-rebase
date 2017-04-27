import React from 'react'
import { PageHeader } from 'rebass'

class Breadcrumbs extends Component {
    links = {[
    {
      children: 'Jxnblk',
      href: '#!'
    },
    {
      children: 'Rebass',
      href: '#!'
    },
    {
      children: 'Breadcrumbs',
      href: '#!'
    }
  ]}
  return <div>
    { links }
  </div>
}
export default Breadcrumbs
