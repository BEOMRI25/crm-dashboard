import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import './SocialIcon.css'
import WebsiteIcon from './WebsiteIcon'
import WhatsappIcon from './WhatsappIcon'

function getIconComponent(iconName) {
  switch (iconName) {
    case 'instagram':
      return <InstagramIcon />
    case 'whatsapp':
      return <WhatsappIcon />
    case 'website':
      return <WebsiteIcon />
    case 'facebook':
      return <FacebookIcon />
  }
}

export default function SocialIcon({ iconName }) {
  const icon = getIconComponent(iconName)
  return <div className='social-icon'>{icon}</div>
}
