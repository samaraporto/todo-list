import { useCallback, useMemo, useState } from "react"

interface MemoriztionProps{
    financialData: {
        incomes: number[],
        outcomes: number[]
    }
}

export const Memorization: React.FC<MemoriztionProps> =({financialData})=>{
    const [ showValues , setShowValues] = useState(false)

    const totalIncomes = useMemo(()=>{
        return financialData.incomes.reduce((total, income)=>{
            return total + income
        }, 0)
    }, [financialData.incomes])
    const totalOutcomes = useMemo(()=>{
        return financialData.outcomes.reduce((total, outcome)=>{
            return total + outcome
        }, 0)
    }, [financialData.outcomes])

   const aplicarDesconto = useCallback((desconto: number)=>{
        return totalOutcomes * (1-desconto)
    }, [totalOutcomes])

    return(
        <div>
            <h1>memorization</h1>

            <p>{`total de receitas: R$${showValues ? totalIncomes : "xxxxx"}`}</p>
            <p>{`total de despesas: R$${showValues?totalOutcomes:"xxxxx"}`}</p>

            <br />
            <button onClick={()=>{setShowValues(!showValues)}}>
                {showValues ? "ocutar valores" : "mostrar valores"}
            </button>
        </div>
    )
}
//       <Memorization financialData={{incomes: [30,45,67], outcomes:[4,5,2]}}/>