
interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
  }
  
  export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, isActive }) => {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center w-12 h-12 rounded-full transition 
          ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}
          hover:bg-blue-100 hover:text-blue-600`}
      >
        {icon}
      </button>
    );
  };