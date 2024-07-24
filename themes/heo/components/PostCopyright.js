import { siteConfig } from '@/lib/config';
import { useGlobal } from '@/lib/global';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from'react';
import CONFIG from '../config';

/**
 * 版权声明
 * @returns
 */
export default function PostCopyright() {
  const router = useRouter();
  const [path, setPath] = useState(siteConfig('LINK') + router.asPath);

  useEffect(() => {
    setPath(siteConfig('LINK') + router.asPath);
  }, [router.asPath]);

  const { locale } = useGlobal();

  if (!siteConfig('HEO_ARTICLE_COPYRIGHT', null, CONFIG)) {
    return <></>;
  }

  // 假设作者头像的 URL 可以通过 siteConfig 中的某个属性获取
  const authorAvatar = siteConfig('AUTHOR_AVATAR');

  return (
    <section className='dark:text-gray-300 mt-6 mx-1'>
      <ul className='overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-900 bg-gray-100 p-5 leading-8 border-l-2 border-indigo-500'>
        <li className="flex items-center">
          <ClipOval>
            <img src={authorAvatar} alt="Author Avatar" className="w-10 h-10 rounded-full mr-2" />
          </ClipOval>
          <strong>{siteConfig('AUTHOR')}</strong>
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
  );
}
