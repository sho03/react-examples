import { useForm, SubmitHandler } from 'react-hook-form';

type MyFormData = {
    firstName: string,
    lastName: string,
    category: string
}

export default function HookFormExample() {

    const { register, handleSubmit, formState: { errors }, } = useForm<MyFormData>()
    const onSubmit: SubmitHandler<MyFormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('firstName', { required: true })} placeholder="名前"/>
                { errors.firstName && <div style={{color: 'red'}}>名前を入力してください</div>}
            </div>
            <div>
                <input {...register('lastName', { required: true})} placeholder="苗字"/>
                { errors.lastName && <div style={{color: 'red'}}>苗字を入力してください</div>}
            </div>
            <div>
                <select {...register('category', { required: true})} >
                    <option value="">select...</option>
                    <option value="category A">category A</option>
                    <option value="category B">category B</option>
                </select>
                { errors.category && <div style={{color: 'red'}}>select category</div> }
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    )
}
