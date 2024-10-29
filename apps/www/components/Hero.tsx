/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use client';

import {ForwardedRef, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes} from 'react';
import {CalendarDays, Clock, ExternalLink, MapPin} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {cn} from '@/lib/utils';
import {TestableComponent} from '@/types/dom';
import NelumKuluna from '@/icons/NelumKuluna';
import CoffeeBeans from '@/icons/CoffeeBeans';
import RegisterButton from './RegisterButton';
import FlipWords from './FlipWords';
import Meetup from '@/icons/Meetup';
import {goodBrush} from '@/app/fonts';

export type HeroProps = HTMLAttributes<HTMLDivElement> & TestableComponent;

const Hero: ForwardRefExoticComponent<HeroProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  HeroProps
>(({className, ...rest}: HeroProps, ref: ForwardedRef<HTMLDivElement>) => {
  const router: AppRouterInstance = useRouter();

  const handleRegisterClick = (): void => {
    const orgName: string | undefined = process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_APP_ORG || '';
    const clientId: string | undefined = process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_APP_ID || '';
    const appName: string | undefined = process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_APP_NAME || '';

    const url: string = `https://accounts.asgardeo.io/t/${orgName}/accountrecoveryendpoint/register.do?client_id=${clientId}&sp=${appName}`;
    router.push(url);
  };

  return (
    <div className={cn('hero', className)} ref={ref} {...rest}>
      <div
        className={cn(
          'w-auto pb-16 pt-[40px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-25 flex justify-between gap-8 items-center flex-col relative z-0',
          className,
        )}
      >
        <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
          <h1
            className={`hero__title ${goodBrush.className} tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[12em] max-w-lg md:max-w-xl lg:max-w-4xl text-center text-white`}
          >
            JavaScript Colombo
          </h1>
          <h3 className="flex gap-2 flex-wrap justify-center items-center font-space-grotesk leading-snug dark:text-[#FFFFFFB2] text-[#00000080] text-[20px] lg:text-xl max-w-md md:max-w-xl lg:max-w-[640px] text-center">
            Let&apos;s meetup in Colombo, grab a <span className="underlined">coffee</span>
            <CoffeeBeans height={28} width={28} /> and talk{' '}
            <span>
              <code className="font-mono">`</code>
              <span className="font-bold">JavaScript</span>
              <code className="font-mono">`</code>
            </span>
          </h3>
          <div className="mt-8 text-left border border-1 px-8 py-6 rounded-md">
            <h4 className="text-lg font-bold text-primary mb-2">🔔 Next session</h4>
            <p className="text-md text-primary flex items-center gap-1">
              <span className="flex items-center gap-1">
                <CalendarDays /> Nov 6th 2024
              </span>
              ,{' '}
              <span className="flex items-center gap-1">
                <Clock />
                6:00 PM Eastern
              </span>{' '}
              at{' '}
              <span className="flex items-center gap-1">
                <MapPin className="text-[red]" />
                WSO2, Colombo 4, Sri Lanka
              </span>
            </p>
          </div>
          <div className="flex items-center gap-10 mt-10">
            <RegisterButton className="w-60" onClick={handleRegisterClick}>
              <FlipWords words={['Register', 'RSVP ✨']} className="text-inverse font-bold" />
            </RegisterButton>
            <div className="flex items-center gap-10">
              <div className="h-12 w-px bg-gray-400" />
              <span className="flex items-center">
                check us out on{' '}
                <span className="flex items-center underlined cursor-pointer group">
                  <Meetup height={30} width={100} />
                  <ExternalLink className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </span>
            </div>
          </div>

          <div className="nelum-kuluna-mask absolute right-[-125px] top-[50px]">
            <NelumKuluna />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
