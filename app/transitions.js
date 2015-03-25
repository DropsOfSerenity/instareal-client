export default function(){
  this.transition(
    this.fromRoute('register'),
    this.toRoute('login'),
    this.use('toLeft', {duration: 500}),
    this.reverse('toRight', {duration: 500})
  );
}
