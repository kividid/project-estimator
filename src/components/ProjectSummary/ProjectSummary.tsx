import React from 'react'
import { LineItem } from '../../containers/project/Project'
import { TextField } from '@material-ui/core'

interface ProjectSummaryProps {
    lineItems: LineItem[] | undefined,
    properties: {
        margin: number;
        setMargin: React.Dispatch<React.SetStateAction<number>>;
        qty: number;
        setQty: React.Dispatch<React.SetStateAction<number>>;
    }
}


export const ProjectSummary: React.FC<ProjectSummaryProps> = ({lineItems, properties}) => {
    const calculateTotalCost = (): number => {
        if (lineItems) {
            return lineItems.reduce((totalCost, lineItem) => {
                const lineCost = totalCost + (lineItem.qty || 0) * (lineItem.cost || 0)
                return lineItem.flat ? lineCost : lineCost * properties.qty
            }, 0)
        }

        return 0
    }

    const calculatePrice = (): number => {
        return calculateTotalCost() / (1 - properties.margin / 100)
    }

    const calculateProfit = (): number => {
        return calculatePrice() - calculateTotalCost()
    }

    return(
        <div>
            <h3>Project Summary</h3>
            <p>Total Cost: ${calculateTotalCost().toFixed(2)}</p>
            <p>Total Price: ${calculatePrice().toFixed(2)}</p>
            <p>Profit: ${calculateProfit().toFixed(2)}</p>
            <TextField value={properties.qty} type="number" label="Quantity" onChange={(e) => properties.setQty(Number(e.currentTarget.value))} />
            <TextField value={properties.margin} type="number" label="Margin (%)" onChange={(e) => properties.setMargin(Number(e.currentTarget.value))} />
            <p>{JSON.stringify(lineItems)}</p>
        </div>
    )
}
