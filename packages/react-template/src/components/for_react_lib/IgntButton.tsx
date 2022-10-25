import { Link } from "react-router-dom";
interface IgntButtonProps {
  link: string;
  href: string;
  target: string;
  type: string;
  disabled:boolean;
  busy: boolean;
}
export default function IgntButton(props: IgntButtonProps) {

  return (
    link?
  <Link to={link} disabled={disabled} className={"font-normal text-md rounded-lg" +}
    
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary',
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary',
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain',
    }"
    :disabled="disabled"
  >
    <span class="sp-button__text"><slot></slot></span>
    <div class="sp-button__loading">
      <div class="sp-icon sp-icon-Reload"></div>
    </div>
  </router-link>
  <a
    :href="href"
    v-else-if="href"
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary',
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary',
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain',
    }"
    :disabled="disabled"
    :target="target"
  >
    <span class="sp-button__text"><slot></slot></span>
    <div class="sp-button__loading">
      <div class="sp-icon sp-icon-Reload"></div>
    </div>
  </a>
  <button
    type="button"
    v-else
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary',
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary',
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain',
    }"
    :disabled="disabled"
  >
    <span class="sp-button__text"><slot></slot></span>
    <div class="sp-button__loading">
      <div class="sp-icon sp-icon-Reload"></div>
    </div>
  </button>)