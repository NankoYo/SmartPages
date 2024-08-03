import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            {/* 颜色过度区 */}
            <div id='color-transition' className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'>

            </div>

            {/* 社交按钮 */}
            <div className='w-full h-24'>
                <SocialButton />
            </div>

            <br />

            {/* 底部页面信息 */}
            <div
            id='footer-bottom'
            className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
            <div id='footer-bottom-left'>     
            Copyright{' '}<i className='mx-1 animate-pulse fas fa-registered' />2021-2024{' '}
          <a
            href='https://blog.nankoyo.com/'
            className='underline font-bold dark:text-gray-300 '>
           NanKoYo, Inc
          </a>{' '}All Rights Reserved. <br /><br />
          <i className='fa-solid fa-language' />{' '}
              <a href='https://blog.nankoyo.com/' className='mr-2'>
                一言: <span id="hitokoto"></span>
          </a><br />
         <i className='fas fa-shield-alt' />{' '}
              <a href='https://www.cloudflare.com/' className='mr-2'>
                当前CDN节点: <span id="cdn"></span>
              </a>
              </div>
    <div id='footer-bottom-left'>        
    <div className="github-badge-big">
    <span className="badge-subject">
      <i className="fas fa-id-card" />
      {' '}一言{' '}
    </span>
    <span className="badge-value bg-orange">
      <a
        href="https://blog.nankoyo.com/"
        one-link-mark="yes"
        target="_blank"
      >
        <span id="hitokoto" />
      </a>
    </span>
  </div>
  <div className="github-badge-big">
    <span className="badge-subject">
      <i
        aria-hidden="true"
        className="fas fa-cloudflare"
      />
      {' '}CDN
    </span>
    <span className="badge-value bg-shallots">
      <a
        href="https://www.clouflare.com/"
        one-link-mark="yes"
        target="_blank"
      >
        CloudFlare
      </a>
    </span>
    <span className="badge-subject">
      <i className="fas fa-wordpress" />
      {' '}Powered
    </span>
    <span className="badge-value bg-green">
      <a
        href="https://cn.wordpress.org/"
        one-link-mark="yes"
        target="_blank"
      >
        WordPress
      </a>
    </span>
  </div>
  <div className="github-badge-big">
    <span className="badge-subject">
      <i
        aria-hidden="true"
        className="fas fa-copyright"
      />
      Copyright{' '}
    </span>
    <span className="badge-value bg-red">
      2021-2024
      <a
        href="https://www.nankoyo.com/"
        one-link-mark="yes"
        target="_blank"
      >
        @ NanKoYo, Inc.
      </a>
    </span>
    <a
      href="https://www.nankoyo.com/"
      one-link-mark="yes"
      target="_blank"
    >
    </a>
  </div>
  <a
    href="https://www.nankoyo.com/"
    one-link-mark="yes"
    target="_blank"
  >
    <div className="github-badge-big">
      <span className="badge-subject">
        <i className="fa fa-clock-o" />
        {' '}Running Time
      </span>
      <span className="badge-value bg-apricots">
        <span
          className="odometer odometer-auto-theme"
          id="blog_running_days"
        />
        days
        <span
          className="odometer odometer-auto-theme"
          id="blog_running_hours"
        />
        {' '}H
        <span
          className="odometer odometer-auto-theme"
          id="blog_running_mins"
        />
        {' '}M
        <span
          className="odometer odometer-auto-theme"
          id="blog_running_secs"
        />
        S
      </span>
    </div>
  </a>
</div>
        

          <div id='footer-bottom-right'>
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
        
          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer
  
