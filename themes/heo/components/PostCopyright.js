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
        <div className="reward-container">
  <button
    className="reward-btn"
    id="rewardBtn"
  >
    						 							❤ 打赏						  						
  </button>
  <p className="tea">
    “觉得不错的话，给点打赏吧 ୧(๑•̀⌄•́๑)૭ ”
  </p>
  <div
    className="reward-img-container"
    id="rewardImgContainer"
  >
    <div className="singleImgContainer">
      <img
        alt="微信二维码"
        className="reward-img"
        id="wechatImg"
        src="https://cdn.nankoyo.com/public/cache/blog/posts/wechat.jpg"
      />
      <p className="wechatPay">
        微信支付
      </p>
    </div>
    <div className="singleImgContainer">
      <img
        alt="支付宝二维码"
        className="reward-img"
        id="alipayImg"
        src="https://cdn.nankoyo.com/public/cache/blog/posts/alipay.jpg"
      />
      <p className="aliPay">
        支付宝支付
      </p>
    </div>
  </div>
</div>
      </ul>
    </section>
  )
}
