import SpinLoadingSVG from '../assets/svg/spin-loading.svg'

type props = { 
    children: React.ReactNode,
    className?: string,
    loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, disabled = false, loading = false, ...props }: props) => {
  return (
    <button 
      disabled={disabled}
      className={`
        rounded-sm border-0 brand-bg brand-hover 
        w-full py-4 relative
        text-center oposite-text text-2xl fw-700 
        cursor-pointer disabled:cursor-default disabled:opacity-60
        transition-opacity duration-300
        ${className}`} 
      { ...props }
    >
        { children }

        { loading && (
            <img src={SpinLoadingSVG} alt="carregando..." className='animate-spin absolute top-1/2 right-6 -translate-y-1/2'/> 
          )
        }
    </button>
  )
}

export default Button
