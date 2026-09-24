import Image from 'next/image';
import Link from 'next/link';
import BannerImg from '@/app/assets/banner.png'

const Banner = () => {
    return (
        <section>
            <div className=" bg-[#111319] border border-gray-800/60 rounded-3xl p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">

                {/* Left Column: Content */}
                <div className="lg:col-span-7 flex flex-col items-start z-10">
                    {/* Subtitle / Eyebrow */}
                    <span className="text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-4">
                        WORKOUT LIBRARY
                    </span>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/"
                        className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200"
                    >
                        BROWSE WORKOUTS
                    </Link>
                </div>

                {/* Right Column: 3D Graphic Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
                    <div className="relative w-full max-w-95 aspect-square flex justify-center items-center">
                        <Image
                            src={BannerImg}
                            alt="Workout Machine"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 400px"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;