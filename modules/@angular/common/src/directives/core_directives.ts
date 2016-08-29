/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type} from '@angular/core';

import {NgClass} from './ng_class';
import {NgFor} from './ng_for';
import {NgIf} from './ng_if';
import {NgPlural, NgPluralCase} from './ng_plural';
import {NgStyle} from './ng_style';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from './ng_switch';
import {NgTemplateOutlet} from './ng_template_outlet';

/**
 * A collection of Angular core directives that are likely to be used in each and every Angular
 * application.
 * Angular核心指令集合都有可能被使用在每一个Angular应用中。
 *
 * This collection can be used to quickly enumerate all the built-in directives in the `directives`
 * property of the `@Component` annotation.
 * 这个集合可以用来快速枚举“组件”注解中的“指令”属性中的所有内置指令。
 *
 * ### Example ([live demo](http://plnkr.co/edit/yakGwpCdUkg0qfzX5m8g?p=preview))
 *
 * Instead of writing:
 * 而不是写下面这样：
 *
 * ```typescript
 * import {NgClass, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
 * import {OtherDirective} from './myDirectives';
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'myComponent.html',
 *   directives: [NgClass, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, OtherDirective]
 * })
 * export class MyComponent {
 *   ...
 * }
 * ```
 * one could import all the core directives at once:
 * 一个可以一次导入所有核心指令：
 *
 * ```typescript
 * import {CORE_DIRECTIVES} from '@angular/common';
 * import {OtherDirective} from './myDirectives';
 *
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'myComponent.html',
 *   directives: [CORE_DIRECTIVES, OtherDirective]
 * })
 * export class MyComponent {
 *   ...
 * }
 * ```
 *
 * @stable
 */
export const CORE_DIRECTIVES: Type<any>[] = [
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgPlural,
  NgPluralCase,
];
