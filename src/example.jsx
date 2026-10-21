<div
        className='
        flex
        flex-col
        gap-4
        bg-[linear-gradient(135deg,#777777,#F7F7F7,#B0B0B0,#FFFFFF,#858585)]
        px-8
        py-6
        rounded-lg
        max-h-128
        overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:transition-all
        [&::-webkit-scrollbar-thumb]:duration-200
        [&::-webkit-scrollbar-thumb]:cursor-pointer
       [&::-webkit-scrollbar-thumb]:bg-gray-100
       [&::-webkit-scrollbar-thumb]:hover:bg-gray-200
        '
        >
          {
            selectedTransaction === "transactionSub"
            ? <TransactionSub/>
            : <TransactionBook/>
          }
        </div>