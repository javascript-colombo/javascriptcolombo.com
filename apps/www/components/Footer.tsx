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

import {ForwardedRef, forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes} from 'react';
import {cn} from '@/lib/utils';
import {TestableComponent} from '@/types/dom';
import {ExternalLink, GithubIcon, Heart} from 'lucide-react';
import WSO2 from '@/icons/WSO2';

export type FooterProps = HTMLAttributes<HTMLDivElement> & TestableComponent;

const Footer: ForwardRefExoticComponent<FooterProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  FooterProps
>(({className, ...rest}: FooterProps, ref: ForwardedRef<HTMLDivElement>) => (
  <footer className={cn('footer', className)} ref={ref} {...rest}>
    <div className="container mx-auto py-4">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} JavaScript Colombo. All rights reserved.
      </p>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
          <Heart width={16} height={16} stroke="#c96198" />
          <span>Sponsored by</span>
          <a href="https://wso2.com" className="text-blue-500 hover:underline">
            <WSO2 height={20} width={40} />
          </a>
        </p>
      </div>
      <div className="mt-4 text-center">
        <a
          href="https://github.com/javascript-colombo/javascriptcolombo.com"
          className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1 hover:underline"
        >
          <GithubIcon width={16} height={16} />
          <span>Source Code</span>
          <ExternalLink width={16} height={16} />
        </a>
      </div>
    </div>
  </footer>
));

export default Footer;
