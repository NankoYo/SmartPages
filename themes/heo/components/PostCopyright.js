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
      </ul>
    </section>
<div
  className="reward"
  style={{
    marginTop: '500px'
  }}
>
  <div className="reward-button">
    赏
    <span className="reward-code">
      <span className="alipay-code">
        <img
          className="alipay-img"
          src="https://cdn.nankoyo.com/public/cache/blog/posts/alipay.jpg"
        />
        <b>
          支付宝扫码打赏
        </b>
      </span>
      <span className="wechat-code">
        <img
          className="wechat-img"
          src="https://cdn.nankoyo.com/public/cache/blog/posts/wechat.jpg"
        />
        <b>
          微信打赏
        </b>
      </span>
    </span>
  </div>
  <p className="reward-notice">
    {' '}如果文章对您有帮助，欢迎移至上方按钮打赏作者{' '}
  </p>
  {' '}
</div>
  )
}
