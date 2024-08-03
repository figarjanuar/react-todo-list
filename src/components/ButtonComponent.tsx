interface ButtonComponentProps {
  type?: string;
  children: React.ReactNode;
  onClick?: () => Promise<void>
}

export default function ButtonComponent({ onClick, type = 'primary', children }: ButtonComponentProps) {
  
  return (
    <button onClick={onClick} className={`h-11 w-full rounded-md text-white bg-slate-500 hover:bg-slate-600 cursor-pointer ${type === 'secondary' ? 'opacity-80' : ''} `}>{children}</button>
  )
}
