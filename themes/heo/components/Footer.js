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
    <div className="github-badge-big">
    <span className="badge-subject">
      <i className="fa fa-id-card" />
      {' '}作者{' '}
    </span>
    <span className="badge-value bg-orange">
      <a
        href="https://www.nankoyo.com/"
        one-link-mark="yes"
        target="_blank"
        >
        NanKoYo Team
      </a>
    </span>
  </div>
  <div className="github-badge-big">
    <span className="badge-subject">
      <i
        aria-hidden="true"
        className="fas fa-shield-alt"
      />
      {' '}当前CDN节点:
    </span>
    <span className="badge-value bg-shallots">
      <a
        href="https://www.cloudFlare.com/"
        one-link-mark="yes"
        target="_blank"
      >
        <span id="cdn" />
      </a>
    </span>
    <span className="badge-subject">
      <i className="fa fas-wordpress" />
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
        className="fa fa-copyright"
      />
      Copyright{' '}
    </span>
    <span className="badge-value bg-red">
      2022-2023
      <a
        href="https://blog.nankoyo.com/"
        one-link-mark="yes"
        target="_blank"
      >
        @ NanKoYo
      </a>
    </span>
    <a
      href="https://blog.nankoyo.com/"
      one-link-mark="yes"
      target="_blank"
    >
    </a>
  </div>
  <a
    href="https://blog.nankoyo.com/"
    one-link-mark="yes"
    target="_blank"
  >
    <div className="github-badge-big">
    <span className="badge-subject">
      <i
        aria-hidden="true"
        className="fas fa-shield-alt"
      />
      一言{' '}
    </span>
    <span className="badge-value bg-red">
      <a
        href="https://blog.nankoyo.com/"
        one-link-mark="yes"
        target="_blank"
      >
        <span id="hitokoto" />
      </a>
    </span>
    <a
      href="https://blog.nankoyo.com/"
      one-link-mark="yes"
      target="_blank"
    >
    </a>
  </div>
  <a
    href="https://blog.nankoyo.com/"
    one-link-mark="yes"
    target="_blank"
  >
    <div className="github-badge-big">
      <span className="badge-subject">
        <i className="fa fas-clock-o" />
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
    <span className='hidden busuanzi_container_site_pv'>
    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
    <span className='pl-2 hidden busuanzi_container_site_uv'>
    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span> 
    </div>
  </a>
</div>                                                                </div>
        </div>
        </footer >
  )
}

export default Footer
