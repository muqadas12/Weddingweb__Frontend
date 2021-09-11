import React from 'react'
import "./Footer.scss"

import { Layout} from 'antd';
const {Footer } = Layout;
function FooterComponent() {
    return (
        <div>
              <Footer className="footer-comp">
	<p >
  Copyright&copy; {new Date().getFullYear()} All right reserved

  </p>
	</Footer>
        </div>
    )
}

export default FooterComponent
