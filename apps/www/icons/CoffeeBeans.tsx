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

import {FC, ReactElement, SVGProps} from 'react';

const CoffeeBeans: FC<SVGProps<SVGSVGElement>> = ({
  height = 14,
  width = 14,
  ...rest
}: SVGProps<SVGSVGElement>): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={height} width={width} {...rest}>
    <g fill="none" fillRule="evenodd">
      <g transform="matrix(.96592583 .25881905 -.25881905 .96592583 36.523975 18.040865)">
        <ellipse cx="13.765" cy="19.5" fill="#9c4d4d" rx="13.765" ry="19.5" />
        <path
          d="m15.2059998 3s-4.782769 6.55469625-1.8226179 11.4784834c2.960151 4.9237872 4.1249974 7.9971889 1.8226179 12.861472s-.7163083 8.675809-.7163083 8.675809"
          stroke="#bd7575"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
      <ellipse cx="22" cy="31.5" fill="#bd7575" rx="18" ry="25.5" />
      <path
        d="m22.887588 8s-6.6659904 9.1356164-2.5402761 15.9981512c4.1257144 6.8625348 5.7492206 11.1460924 2.5402761 17.9256932-3.2089444 6.7796008-.9983556 12.09192-.9983556 12.09192"
        stroke="#9c4d4d"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default CoffeeBeans;
