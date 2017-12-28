from graphene_django import DjangoObjectType
import graphene

from . import models


class ExerciseDefinition(DjangoObjectType):
    class Meta:
        model = models.ExerciseDefinition


class CreateExerciseDefinition(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        notes = graphene.String()

    ok = graphene.Boolean()
    exercise_definition = graphene.Field(lambda: ExerciseDefinition)

    @staticmethod
    def mutate(root, info, **args):
        exercise_definition = models.ExerciseDefinition.objects.create(name=args.get('name'), notes=args.get('notes', None))
        ok = True
        return CreateExerciseDefinition(exercise_definition=exercise_definition, ok=ok)

class Query(graphene.ObjectType):
    exercise_definitions = graphene.List(ExerciseDefinition)

    def resolve_exercise_definitions(self, info):
        return models.ExerciseDefinition.objects.all()


class Mutations(graphene.ObjectType):
    create_exercise_definition = CreateExerciseDefinition.Field()

schema = graphene.Schema(query=Query, mutation=Mutations)
