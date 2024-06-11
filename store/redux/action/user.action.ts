import { colors, USER_ORDER } from "@/constants";
import { users } from "@/constants/data";

export const GET_USERS = 'GET_USERS';

export const getUser = (filter: {key: string, order: USER_ORDER}) => ({
  type: GET_USERS,
  payload: () => {
    let originalData = Object.values(users).sort((a, b) => {
      if(a.bananas === b.bananas) {
        return a.name.localeCompare(b.name)
      }
      return b.bananas - a.bananas
    }).map((item, id) => ({
      ...item,
      rank: id + 1
    })) as any

    if(filter.order === 'ASC') {
      originalData = originalData.sort((a: any, b: any) => a.bananas - b.bananas)
    }
    let modifiedData = originalData.slice(0, 10)

    // highlight
    modifiedData = modifiedData.map((item: any) => {
      switch(item.rank) {
        case 1:
          return {
            ...item,
            ...patchColor('first')
          }
        case 2:
          return {
            ...item,
            ...patchColor('second')
          }
        case 3: 
          return {
            ...item,
            ...patchColor('third')
          }
        default:
          return item
      }
    })
    
    // FUZ search
    if(filter.key !== '' && filter.order === 'FUZ') {
      const matchValues = originalData.filter((item: any) => {
        return item.name.toLocaleLowerCase().includes(filter.key.toLocaleLowerCase())
      }).slice(0, 10)

      return matchValues
    }

    // ASC DES
    if(filter.key !== '') {
      const data = originalData.find((item: any) => item.name.toLocaleLowerCase() === filter.key.toLocaleLowerCase())
      if(data && modifiedData.find((item: any) => item.uid === data.uid)) {
        modifiedData = modifiedData.map((item: any) => {
          if(item.uid === data.uid) {
            return {
              ...item,
              option: {
                style: {
                  row: {
                    backgroundColor: colors.info.active
                  },
                  cell: {
                    color: colors.dark.text
                  }
                }
              }
            }
          }
          return item
        })
        
      } else if(data && !modifiedData.find((item: any) => item.uid === data.uid)) {
        if(filter.order === 'DSC') {
          modifiedData.pop()
          modifiedData.push({
            ...data,
            option: {
              style: {
                row: {
                  backgroundColor: colors.info.active
                },
                cell: {
                  color: colors.dark.text
                }
              }
            }
          })
        } else {
          modifiedData.shift()
          modifiedData = [{
            ...data,
            option: {
              style: {
                row: {
                  backgroundColor: colors.info.active
                },
                cell: {
                  color: colors.dark.text
                }
              }
            }
          }, ...modifiedData]
        }
      } else {
        modifiedData = []
      }
    }

    

    return modifiedData
  }
})

const patchColor = (color: keyof typeof colors.info) => {
  return {
    option: {
      style: {
        row: {
          backgroundColor: colors.info[color]
        }
      }
    }
  }
}