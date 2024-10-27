/**
 * MIT License
 *
 * Copyright (c) 2023, Brion Mario
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

import {
  ElementType,
  ForwardRefExoticComponent,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
  forwardRef,
} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import type {TestableComponent} from '@/types/dom';
import type {PolymorphicComponent, PolymorphicRef} from '@/types/component';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {cn} from '@/lib/utils';

/**
 * Type definition for the polymorphic `NavLink` component that represents a navigation link.
 */
type PolymorphicNavLinkComponent = <T extends ElementType = 'a'>(props: NavLinkProps<T>) => ReactElement | null;

/**
 * The `NavLinkProps` interface represents the props accepted by the `NavLink` component.
 */
export type NavLinkProps<T extends ElementType> = PolymorphicComponent<T> &
  TestableComponent & {
    /**
     * The URL the link points to.
     */
    href: string;
    /**
     * The content of the link.
     */
    title?: ReactNode;
  };

/**
 * `NavLink` is a React component that represents a navigation link.
 *
 * @example
 * ```jsx
 * <NavLink href="/about" title="About Us" />
 * ```
 *
 * @param props - Props for the component.
 * @returns NavLink as a React component.
 */
const NavLink: PolymorphicNavLinkComponent = forwardRef(
  <T extends ElementType>(
    {as, href, title, className, key, ...rest}: NavLinkProps<T>,
    ref: PolymorphicRef<T>,
  ): ReactElement => {
    const router: AppRouterInstance = useRouter();
    const isSelected: boolean = router.pathname === href;

    const Element: T | ElementType = as || 'li';

    return (
      <Element
        ref={ref}
        key={key}
        className={cn('px-5 py-2 flex items-center font-sans', className)}
        href={href}
        {...rest}
      >
        <Link href={href} {...rest} legacyBehavior>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cn(
              'underlined block whitespace-nowrap text-lg font-medium hover:text-primary focus:text-primary focus:outline-none',
              {
                'active text-current': isSelected,
                'text-secondary': !isSelected,
              },
            )}
          >
            {title}
          </a>
        </Link>
      </Element>
    );
  },
);

/**
 * The `MobileNavLinkProps` interface represents the props accepted by the `MobileNavLink` component.
 */
export type MobileNavLinkProps = HTMLAttributes<HTMLLIElement> &
  TestableComponent & {
    /**
     * The URL the link points to.
     */
    href: string;
    /**
     * The content of the link.
     */
    title?: ReactNode;
  };

/**
 * `MobileNavLink` is a React component that represents a mobile navigation link.
 *
 * @example
 * ```jsx
 * <MobileNavLink href="/about" title="About Us" />
 * ```
 *
 * @param props - Props for the component.
 * @returns MobileNavLink as a React component.
 */
export const MobileNavLink: ForwardRefExoticComponent<MobileNavLinkProps & RefAttributes<HTMLLIElement>> = forwardRef(
  (
    {href, title, className, key, onClick, ...rest}: MobileNavLinkProps,
    ref: ForwardedRef<HTMLLIElement>,
  ): ReactElement => {
    const router: AppRouterInstance = useRouter();
    const isSelected: boolean = router.pathname === href;

    return (
      <li
        ref={ref}
        key={key}
        className={cn(
          'm-5 rounded-md border border-gray-200 hover:border-transparent bg-gray-100 dark:border-neutral-800 hover:dark:border-transparent dark:bg-background-surface hover:shadow-lg focus-ring hover:cursor-pointer text-primary font-sans',
          className,
        )}
        href={href}
        {...rest}
      >
        <Link href={href} {...rest} legacyBehavior>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cn(
              'px-5vw py-9 block whitespace-nowrap text-lg font-medium hover:text-primary focus:text-primary focus:outline-none',
              {
                'active text-current': isSelected,
                'text-secondary': !isSelected,
              },
            )}
          >
            {title}
          </a>
        </Link>
      </li>
    );
  },
);

export default NavLink;
