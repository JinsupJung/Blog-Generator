import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HeroImage from '../public/hero3.webp';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
        혁신적인 AI 기반 블로그 표준화 SaaS 솔루션을 이용하면, 높은 효율의
            회의록 작성으로 시간을 절약하며, SEO에 최적화된 블로그
            게시물을 쉽고 빠르게 작성할 수 있습니다.
        </p>
        <Link href="/post/new" className="btn mt-5">
        시작하기
        </Link>
      </div>
    </div>
  );
}
