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

             <div class="github-badge-big">
        <span class="badge-subject"><i class="fas fa-id-card"></i> 一言 </span>
        <span class="badge-value bg-orange">
            <a href="https://blog.nankoyo.com/" target="_blank" one-link-mark="yes"><span id="hitokoto"></span></a>
        </span>
    </div>
 
 
  <div class="github-badge-big">
        <span class="badge-subject"><i class="fas fa-cloudflare" aria-hidden="true"></i> CDN</span>
        <span class="badge-value bg-shallots">
            <a href="https://www.clouflare.com/" target="_blank" one-link-mark="yes">CloudFlare</a>
        </span>
 
        <span class="badge-subject"><i class="fas fa-wordpress"></i> Powered</span>
        <span class="badge-value bg-green">
            <a href="https://cn.wordpress.org/" target="_blank" one-link-mark="yes">
                WordPress</a></span>
    </div>
 
    <div class="github-badge-big">
        <span class="badge-subject"><i class="fas fa-copyright" aria-hidden="true"></i>Copyright </span>
        <span class="badge-value bg-red">2021-2024</i>
            <a href="https://www.nankoyo.com/" target="_blank" one-link-mark="yes">@ NanKoYo, Inc.
        </span>
        </script>
    </div>
 
    <div class="github-badge-big">
        <span class="badge-subject"><i class="fa fa-clock-o"></i> Running Time</span><span
            class="badge-value bg-apricots"><span id="blog_running_days" class="odometer odometer-auto-theme"></span>
            days
            <span id="blog_running_hours" class="odometer odometer-auto-theme"></span> H
            <span id="blog_running_mins" class="odometer odometer-auto-theme"></span> M
            <span id="blog_running_secs" class="odometer odometer-auto-theme"></span>S
        </span>

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

          {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
  
