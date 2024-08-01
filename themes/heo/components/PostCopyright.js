import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'

/**
 * 版权声明
 * @returns
 */
export default function PostCopyright() {
  const router = useRouter()
  const [path, setPath] = useState(siteConfig('LINK') + router.asPath)
  useEffect(() => {
    setPath(window.location.href)
  })

  const { locale } = useGlobal()

  if (!siteConfig('HEO_ARTICLE_COPYRIGHT', null, CONFIG)) {
    return <></>
  }

  return (
    <section className='dark:text-gray-300 mt-6 mx-1 '>
      <ul className='overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-900 bg-gray-100 p-5 leading-8 border-l-2 border-indigo-500'>
        <li>
          <strong className='mr-2'>{locale.COMMON.AUTHOR}:</strong>
          <Link href={'/about'} className='hover:underline'>
            {siteConfig('AUTHOR')}
          </Link>
        </li>
        <li>
          <strong className='mr-2'>{locale.COMMON.URL}:</strong>
          <a
            className='whitespace-normal break-words hover:underline'
            href={path}>
            {path}
          </a>
        </li>
        <li>
          <strong className='mr-2'>{locale.COMMON.COPYRIGHT}:</strong>
          {locale.COMMON.COPYRIGHT_NOTICE}
        </li>
        <li>
          <div style="padding: 10px 0; margin: 20px auto; width: 100%; font-size:16px; text-align: center;">
    <button id="rewardButton" disable="enable" onclick="var qr = document.getElementById('QR'); if (qr.style.display === 'none') {qr.style.display='block';} else {qr.style.display='none'}">
        <span>打赏</span></button>
    <div id="QR" style="display: none;">
        <div id="wechat" style="display: inline-block">
            <a class="fancybox" rel="group">
                <img id="wechat_qr" src="https://cdn.nankoyo.com/public/cache/blog/posts/wechat.jpg" alt="WeChat Pay"></a>
            <p>微信打赏</p>
        </div>
        <div id="alipay" style="display: inline-block">
            <a class="fancybox" rel="group">
                <img id="alipay_qr" src="https://cdn.nankoyo.com/public/cache/blog/posts/alipay.jpg" alt="Alipay"></a>
            <p>支付宝打赏</p>
        </div>
    </div>
</div>
      </li>
      </ul>
    </section>
  )
}
